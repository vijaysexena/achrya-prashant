export interface CourseDetails {
  details: {
    id: string;
    contentType: string;
    title: string;
    subtitle: string;
    description: string;
    language: string;
    thumbnail: Thumbnail;
    coursesCount: number;
    tagIds: number[];
  };
  courses: Course[]; // Define Course interface or type separately
  relatedTags: RelatedTag[]; // Define RelatedTag interface or type separately
  relatedContent: RelatedContent[]; // Define RelatedContent interface or type separately
}

// Define the Course interface
export interface Course {
  id: string;
  contentType: string;
  title: string;
  subtitle: string;
  language: string;
  amount: number;
  originalAmount: number;
  thumbnail: Thumbnail;
  series: {
    id: string;
    order: {
      seq: number;
    };
  };
  courseHours: number;
}

// Define the Thumbnail interface
export interface Thumbnail {
  id: string;
  version: number;
  domain: string;
  basePath: string;
  key: string;
  qualities: number[];
  aspectRatio: number;
}

// Define the RelatedTag interface
export interface RelatedTag {
  name: {
    hindi: string;
    english: string;
  };
  tagId: number;
}

// Define the RelatedContent interface
export interface RelatedContent {
  id: string;
  contentType: string;
  title: string;
  subtitle: string;
  language: string;
  thumbnail: Thumbnail;
  coursesCount: number;
  relatedType: number;
  amount: number;
  courseHours: number;
}

// export interface CourseDetails {
//   details: {
//     id: string;
//     contentType: string;
//     title: string;
//     subtitle: string;
//     description: string;
//     language: string;
//     thumbnail: {
//       id: string;
//       version: number;
//       domain: string;
//       basePath: string;
//       key: string;
//       qualities: number[];
//       aspectRatio: number;
//     };
//     coursesCount: number;
//     tagIds: number[];
//   };
//   courses: [
//     {
//       id: string;
//       contentType: string;
//       title: string;
//       subtitle: string;
//       language: string;
//       amount: number;
//       originalAmount: number;
//       thumbnail: {
//         id: string;
//         version: number;
//         domain: string;
//         basePath: string;
//         key: string;
//         qualities: number[];
//         aspectRatio: number;
//       };
//       series: {
//         id: string;
//         order: {
//           seq: number;
//         };
//       };
//       courseHours: number;
//     }
//   ];
//   relatedTags: [
//     {
//       name: {
//         hindi: string;
//         english: string;
//       };
//       tagId: number;
//     }
//   ];
//   relatedContent: [
//     {
//       id: string;
//       contentType: string;
//       title: string;
//       subtitle: string;
//       language: string;
//       thumbnail: {
//         id: string;
//         version: number;
//         domain: string;
//         basePath: string;
//         key: string;
//         qualities: number[];
//         aspectRatio: number;
//       };
//       coursesCount: number;
//       relatedType: number;
//     }
//   ];
// }
