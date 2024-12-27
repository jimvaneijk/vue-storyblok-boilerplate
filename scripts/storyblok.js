import shell from 'shelljs';
import dotenv from 'dotenv';
dotenv.config();

if (!shell.which('storyblok')) {
    shell.echo('Storyblok CLI is not installed, please install it globally');
    shell.echo('1. npm install -g storyblok');
    shell.echo('2. storyblok login (see 1password for credentials)');
    shell.exit(1);
}

if (!process.env.VITE_STORYBLOK_SPACE_ID) {
    shell.echo('VITE_STORYBLOK_SPACE_ID is not set, You can add it to .env');
    shell.exit(1);
} else {
    shell.echo('Fetching components from Storyblok...');
    shell.exec(
        `cd src/storyblok && storyblok pull-components --space ${process.env.VITE_STORYBLOK_SPACE_ID}`,
    );

    shell.echo('Generating component type files...');
    shell.exec(
        `storyblok generate-typescript-typedefs --sourceFilePaths ./src/storyblok/components.${process.env.VITE_STORYBLOK_SPACE_ID}.json --destinationFilePath ./src/storyblok/types/component-types-sb.d.ts`,
    );

    shell.echo('You are ready to go! 🚀');
}
