function CapitalizeLetter(hospitalName: string) {
  const eachWord = hospitalName.split(" ");
  const revisedName = eachWord.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return revisedName.join(" ");
}

export default CapitalizeLetter;
