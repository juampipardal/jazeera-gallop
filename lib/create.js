const prompt = require('prompt');
const shell = require('shelljs');
const fs = require('fs');
const colors = require("colors/safe");

prompt.message = colors.green("Enter");

module.exports = (args, options, logger) => {

    const templatePath = `${__dirname}/../templates/node`;
    const localPath = process.cwd();

    if (fs.existsSync(templatePath)) {
        logger.info('Creating your Jazeera aplication');
        logger.info('🏁_______🐎');

        shell.cp('-R', `${templatePath}/*`, localPath);
        shell.cp('-R', `${templatePath}/.vscode`, localPath);

        logger.info('🏁______🐎');
    } else {
        logger.error(`The requested template for ${args.template} wasn't found.`)
        process.exit(1);
    }

    const variables = require(`${templatePath}/_variables`);

    if (fs.existsSync(`${localPath}/_variables.js`)) {
        shell.rm(`${localPath}/_variables.js`);
    }

    logger.info('🏁_____🐎');
    logger.info('Please fill the following values…');

    // Ask for variable values
    prompt.start().get(variables, (err, result) => {


    // Replace variable values in all files
    shell.ls('-RlA', '.').forEach(entry => {
        if (entry.isFile()) {
            // Replace '[VARIABLE]` with the corresponding variable value from the prompt
            variables.forEach(variable => {
                shell.sed('-i', `\\[${variable.toUpperCase()}\\]`, result[variable], entry.name);
            });
        }
    });
    logger.info('🏁_____🐎');
    logger.info('🏁___🐎');
    logger.info('🏁🐎');
    logger.info('✅ Success!');
    logger.info('Do not forget to run npm install');
    });
     
};