export default function (req, res) {
  const filePath = '../assets/document.pdf';

  res.setHeader('Content-disposition', 'attachment; filename=document.pdf');
  res.setHeader('Content-type', 'application/pdf');

  res.sendFile(filePath);
}