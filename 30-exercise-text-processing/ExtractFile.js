function extractFile(filePath) {
  const filePathArr = filePath.split("\\");
  const fileName = filePathArr.pop();
  const fileNameArr = fileName.split(".");
  const fileExtension = fileNameArr.pop();

  console.log(`File name: ${fileNameArr.join(".")}`);
  console.log(`File extension: ${fileExtension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
