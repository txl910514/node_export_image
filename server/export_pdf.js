/**
 * Created by txl-pc on 2017/8/14.
 */
var PDFDocument = require('pdfkit');
const fs = require('fs');
var pdf = new PDFDocument();
const path = require('path');
pdf.pipe(fs.createWriteStream('dp.pdf'));
pdf.image(path.join(__dirname, '..', 'dp.png'), {
  fit: [500, 300],
  align: 'center',
  valign: 'center'
});

pdf.end()
