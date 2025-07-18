export type ProjectData = {
  id: number;
  name: string;
  thumbnail: string;
  images: string[];
};

const projectData = [
  {
    name: 'TMM-WEB',
    thumbnail: '6.jpg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg'],
  },
  {
    name: 'M-KEIKAKU',
    thumbnail: '2.jpg',
    images: ['1.jpg', '2.jpg', '3.jpg'],
  },
  {
    name: 'TBIM-DENSO2',
    thumbnail: '2.jpg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  },
  {
    name: 'THOME',
    thumbnail: '4.jpg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
  },
  {
    name: 'FUKUOKA-CITY',
    thumbnail: '5.jpg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'],
  },
  {
    name: 'S-RDGD',
    thumbnail: '1.jpg',
    images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg'],
  },
];

export const PROJECTS_DATA: ProjectData[] = projectData.map((data, index) => ({
  id: index,
  ...data,
}));
