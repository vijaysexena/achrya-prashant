export interface Tags {
  // filter(arg0: (item: { level: number }) => boolean): any;
  name: {
    hindi: string;
    english: string;
  };
  tagId: number;
  parent: number;
  level: number;
  hasChildren: boolean;
}

// [
//   [
//     {
//       name: {
//         hindi: 'वेदांत - उपनिषद',
//         english: 'Vedant - Upanishads',
//       },
//       tagId: 1,
//       parent: 0,
//       level: 0,
//       hasChildren: true,
//     },
//   ],
// ];
