const latex = require('node-latex');
const path = require('path');
const fs = require('fs');

const input = fs.createReadStream(path.resolve(__dirname, 'input.tex'));
const output = fs.createWriteStream(path.resolve(__dirname, '..', 'master.pdf'));
const pdf = latex(input);

pdf.pipe(output);
pdf.on('error', console.error);
pdf.on('finish', () => console.log('PDF generated!'));
