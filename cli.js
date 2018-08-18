#!/usr/bin/env node
'use strict';
const pkgJson = require('init-pkg-json');
const meow = require('meow');
const feedback = require('@abranhe/feedback');
const sta = require('str-to-arr');
const sto = require('s-to-o');
const open = require('opn');

const cli = meow(`
	Usage
	  $ init-pkg-json <option>

	Options
		--docs               Read online documentation
		-h, --help           Show this help message and close
		-v, --version        Show packge version
		-f, --feedback       Send a feedback
		    --indentation    Set package.json indentaion
		-n, --name           Add name to packge.json: required *
		    --pkg-version    Add version to packge.json: required *
		-d, --description    Add description to packge.json
		-k, --keywords       Add keywords to packge.json
		-l, --license        Add license to packge.json
		-r, --repository     Add repository url link to the packge.json
		-h, --home           Add homepage link to packge.json
		-b, --bugs           Add bugs link to packge.json
		-a, --author         Add author to packge.json
		    --files          Add files to packge.json
		-m, --main           Add primary entry point file
		    --bin            Executable files included with your project that will be installed
		-s, --scripts        For now, pass an object as script (pass an object)
        --dependencies   Add dependencies (pass an object)
		    --dev-dep        Add dev dependencies (pass an object)
    -e, --engines        The engines specify versions of clients that must be used with your package

	Example
		$ init-pkg-json -n "pkg-name" --pkg-version "1.0.0" -d "My amazing pkg"
`,{
	flags: {
		help: {
			type: 'boolean',
			alias: 'h'
		},
		feedback: {
			type: 'boolean',
			alias: 'f'
		},
		indentaion: {
			type: 'string'
		},
		name: {
			type: 'string',
			alias: 'n'
		},
		pkgVersion: {
			type: 'string',
		},
		description: {
			type: 'string',
			alias: 'd'
		},
		keywords: {
			type: 'string',
			alias: 'k'
		},
		license: {
			type: 'string',
			alias: 'l'
		},
		homepage: {
			type: 'string',
			alias: 'h'
		},
		bugs: {
			type: 'string',
			alias: 'b'
		},
		repository: {
			type: 'string',
			alias: 'r'
		},
		author: {
			type: 'string',
			alias: 'a'
		},
		main: {
			type: 'string',
			alias: 'm'
		},
		scripts: {
			type: 'string',
			alias: 's'
		},
		engines: {
			type: 'string',
			alias: 'e'
		}
	}
});

if(cli.flags.feedback) {
	feedback.project('init-pkg-json');
	feedback.description('Please specify if the issue is with the API project or the CLI');
	feedback.message(feedback.defaultMessage);
	feedback.web();
}

if(cli.flags.docs) {
	open(cli.pkg.homepage);
	process.exit();
}

if(cli.flags.name && cli.flags.pkgVersion) {
	pkgJson.init(cli.flags.name, cli.flags.pkgVersion);
}

if(cli.flags.description) {
	pkgJson.description(cli.flags.description);
}

if(cli.flags.description) {
	pkgJson.description(cli.flags.description);
}

if(cli.flags.keywords) {
	pkgJson.keywords(sta(cli.flags.keywords));
}

if(cli.flags.license) {
	pkgJson.license(cli.flags.license);
}

if(cli.flags.homepage) {
	pkgJson.homepage(cli.flags.homepage);
}

if(cli.flags.bugs) {
	pkgJson.bugs(cli.flags.bugs);
}

if(cli.flags.repository) {
	let arr = sta(cli.flags.repository);

	if(Array.isArray(arr)) {
		pkgJson.repository(arr[0], arr[1]);
	}
	else {
		pkgJson.repository(cli.flags.repository);
	}
}

if(cli.flags.author) {
	let arr = sta(cli.flags.author);

	if(Array.isArray(arr)) {
		pkgJson.author(arr[0], arr[1], arr[2]);
	}
	else {
		pkgJson.author(cli.flags.author);
	}
}

if(cli.flags.files) {
	pkgJson.files(sta(cli.flags.files));
}

if(cli.flags.main) {
	pkgJson.main(cli.flags.main);
}

if(cli.flags.bin) {
	pkgJson.bin(sto(cli.flags.bin));
}

if(cli.flags.scripts) {
	pkgJson.scripts(sto(cli.flags.scripts));
}

if(cli.flags.dependencies) {
	pkgJson.dependencies(sto(cli.flags.dependencies));
}

if(cli.flags.devDep) {
	pkgJson.devDependencies(sto(cli.flags.devDep));
}

if(cli.flags.engines) {
	pkgJson.engines(sto(cli.flags.engines));
}
