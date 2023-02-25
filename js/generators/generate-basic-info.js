import { glueSentence } from '../other-functions/glue-sentence.js'
import { randomMinMax, shuffleArray } from "../other-functions/supporting-functions.js"

export const generateBasicInfo = (firstName, finalPunctuation) => {

   const paramsSmallSentence = [
      1,
      false,
      false,
      firstName,
      finalPunctuation,
   ]

   const paramsSmallSentencePunctuation = [
      1,
      true,
      false,
      firstName,
      finalPunctuation,
   ]

   const paramsLargeSentence = [
      true,
      true,
      firstName,
      finalPunctuation,
   ]

   return [
      ...glueSentence('body', ...paramsSmallSentencePunctuation),
      ...glueSentence('from', ...paramsSmallSentence),
      ...glueSentence('clothes', ...paramsSmallSentencePunctuation),
      ...glueSentence('job', ...paramsSmallSentence),
      ...glueSentence('dream', ...paramsSmallSentence),
      ...glueSentence('politicalViewes', ...paramsSmallSentencePunctuation),
      ...glueSentence('childhood', ...paramsSmallSentence),
      ...glueSentence('loves', randomMinMax(2, 3), ...paramsLargeSentence),
      ...glueSentence('hobby', randomMinMax(2, 3), ...paramsLargeSentence),
      ...glueSentence('good', randomMinMax(4, 5), ...paramsLargeSentence),
      ...glueSentence('bad', randomMinMax(4, 5), ...paramsLargeSentence),
      ...glueSentence('hates', randomMinMax(2, 3), ...paramsLargeSentence),
      ...glueSentence('vices', randomMinMax(2, 3), ...paramsLargeSentence),
      ...glueSentence('oddities', randomMinMax(2, 3), ...paramsLargeSentence),
      ...glueSentence('fears', randomMinMax(2, 3), ...paramsLargeSentence),
      ...glueSentence('personalLife', ...paramsSmallSentence),
      ...glueSentence('parents', ...paramsSmallSentence),
   ].join(' ')
}