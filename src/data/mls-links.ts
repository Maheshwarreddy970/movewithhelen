// Central registry for Helen Everett's live KW MLS search links.
// All links open in a new tab (target="_blank" rel="noopener noreferrer").

export const KW_BASE_URL = "https://heleneverett.kw.com";

export const mlsLinks = {
  home: KW_BASE_URL,
  allSale: `${KW_BASE_URL}/search/sale`,
  allRent: `${KW_BASE_URL}/search/rent`,
  mortgageCalculator: `${KW_BASE_URL}/mortgage-calculator`,
  downloadApp: `${KW_BASE_URL}/download-the-app`,

  // 4 Service Areas — For Sale
  citiesSale: {
    oakville:
      "https://heleneverett.kw.com/search/sale/Oakville-ON-CAN/1044564?viewport=43.580012316132795%2C-79.45431762499999%2C43.31780388465917%2C-79.98166137499999&q=Oakville%2C+ON%2C+CAN",
    burlington:
      "https://heleneverett.kw.com/search/sale/Burlington-ON-CAN/1044565?viewport=43.440080892260404%2C-79.71108778076172%2C43.3088151514499%2C-79.97475965576172&q=Burlington%2C+ON%2C+CAN",
    hamilton:
      "https://heleneverett.kw.com/search/sale/Hamilton-ON-CAN/1044568?viewport=43.52351495115016%2C-79.40794634999999%2C42.997471170582486%2C-80.46263384999999&q=Hamilton%2C+ON%2C+CAN",
    niagara:
      "https://heleneverett.kw.com/search/sale/Niagara-County-ON-CAN/1050657?viewport=43.312582564813084%2C-78.80379005%2C42.78471202877386%2C-79.85847755&q=Niagara+County%2C+ON%2C+CAN",
  },

  // 4 Service Areas — For Rent
  citiesRent: {
    oakville:
      "https://heleneverett.kw.com/search/rent/Oakville-ON-CAN/1044564?viewport=43.580012316132795%2C-79.45431762499999%2C43.31780388465917%2C-79.98166137499999&q=Oakville%2C+ON%2C+CAN",
    burlington:
      "https://heleneverett.kw.com/search/rent/Burlington-ON-CAN/1044565?viewport=43.43858516654082%2C-79.65203626708984%2C43.30731618465586%2C-79.91570814208984&q=Burlington%2C+ON%2C+CAN",
    hamilton:
      "https://heleneverett.kw.com/search/rent/Hamilton-ON-CAN/1044568?viewport=43.52351495115016%2C-79.40794634999999%2C42.997471170582486%2C-80.46263384999999&q=Hamilton%2C+ON%2C+CAN",
    niagara:
      "https://heleneverett.kw.com/search/rent/Niagara-Falls-ON-CAN/1044576?viewport=43.16946715959371%2C-78.98474379126868%2C43.03761649128153%2C-79.24841566626868&q=Niagara+Falls%2C+ON%2C+CAN",
  },

  // 4 Property Categories (Helen's 4 Cloudinary photo cards)
  // Note: If you want Detached/Condos locked to a specific subtype param,
  // click "Houses" or "Condos" on heleneverett.kw.com and swap the query param below.
  propertyTypes: {
    detached:
      "https://heleneverett.kw.com/search/sale/Burlington-ON-CAN/1044565?viewport=43.51257920354208%2C-79.578221875%2C43.250077990610706%2C-80.105565625&q=Burlington%2C+ON%2C+CAN&property_subtype=SINGLE_FAMILY",
    townhomes:
      "https://heleneverett.kw.com/search/sale/Burlington-ON-CAN/1044565?viewport=43.51257920354208%2C-79.578221875%2C43.250077990610706%2C-80.105565625&q=Burlington%2C+ON%2C+CAN&property_subtype=TOWNHOUSE",
    condos:
      "https://heleneverett.kw.com/search/sale/Burlington-ON-CAN/1044565?viewport=43.51257920354208%2C-79.578221875%2C43.250077990610706%2C-80.105565625&q=Burlington%2C+ON%2C+CAN&property_subtype=CONDO",
    rentals:
      "https://heleneverett.kw.com/search/rent/Burlington-ON-CAN/1044565?viewport=43.43858516654082%2C-79.65203626708984%2C43.30731618465586%2C-79.91570814208984&q=Burlington%2C+ON%2C+CAN",
  },
} as const;