export function licenseSwitch(license: string): string {
  let licenseBadge: string;

  switch (license) {
    case "mit":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      console.log(licenseBadge);
      break;

    case "isc":
      licenseBadge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      console.log(licenseBadge);
      break;

    case "gplv3":
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      console.log(licenseBadge);
      break;

    default:
      licenseBadge = ``;
      break;
  }
  return licenseBadge;
}
