type MajorBrand = { _brand: 'major' };
type MinorBrand = { _brand: 'minor' };


interface MajorCredits {
  credits: number & MajorBrand;
}

interface MinorCredits {
  credits: number & MinorBrand;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: (subject1.credits + subject2.credits) as number & MajorBrand
  }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: (subject1.credits + subject2.credits) as number & MinorBrand
  }
}