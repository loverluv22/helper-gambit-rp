import { arrayRandomElement } from "../other-functions/supporting-functions.js"

const skins = [
   2,
   23,
   26,
   29,
   37,
   42,
   52,
   59,
   60,
   61,
   73,
   82,
   96,
   97,
   98,
   100,
   101,
   108,
   109,
   110,
   114,
   115,
   116,
   119,
   121,
   124,
   126,
   146,
   147,
   153,
   155,
   170,
   175,
   177,
   181,
   188,
   189,
   206,
   217,
   223,
   240,
   248,
   250,
   268,
]

export const generateSkin  = () => arrayRandomElement(skins)