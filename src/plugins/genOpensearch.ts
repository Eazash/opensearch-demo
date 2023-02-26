import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { Plugin, ResolvedConfig } from 'vite';

let config: ResolvedConfig;
let distPath: string;
type Options = {
	fileName: string | 'opensearch.xml';
	baseUrl: string;
	searchPath: string;
	queryParam: string;
	shortName: string;
	longName?: string;
	description?: string;
	iconFile?: string;
};

function generateFileOutput(options: Options) {
	return `<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/"
  xmlns:moz="http://www.mozilla.org/2006/browser/search/">
  <ShortName>${options.shortName}</ShortName>
  ${
		options.description !== undefined
			? `<Description>${options.description}</Description>`
			: ''
	}
  ${
		options.longName !== undefined
			? `<LongName>${options.longName}</LongName>`
			: ''
	}
  <InputEncoding>UTF-8</InputEncoding>
  <Url type="text/html" method="get" template="${options.baseUrl}/${
		options.searchPath
	}?${options.queryParam}={searchTerms}"/>
  ${
		options.iconFile !== undefined
			? `<Image width="16" height="16" type="image/x-icon">${options.baseUrl}/${options.iconFile}</Image>`
			: ''
	}
  <Url rel="self" type="application/opensearchdescription+xml" template="${
		options.baseUrl
	}/${options.fileName}"/>
  <moz:SearchForm>${options.baseUrl}/${options.searchPath}</moz:SearchForm>
</OpenSearchDescription>
  `;
}

export const genOpensearchDescription = async (
	options: Options
): Promise<Plugin> => {
	return {
		enforce: 'post',
		name: 'vite-plugin-generate-opensearch',
		async configResolved(resolvedConfig) {
			config = resolvedConfig;
			distPath = resolve(config.publicDir, options.fileName);
			const output = generateFileOutput(options);
			await writeFile(distPath, output, { flag: 'w' });
			config.logger.info(
				`Generating ${options.fileName} with Base URL ${options.baseUrl}`
			);
		}
	};
};
