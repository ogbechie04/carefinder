function CleanPhoneNumber(phoneNumbers: string[]): string[] {
    return phoneNumbers.flatMap((number) =>
      number
      .split(/[ ,;]+/)
      .map((num) => num.trim().replace(/[-\s]/g, ""))
      .filter((num) => num !== "")
    );
  }

export default CleanPhoneNumber