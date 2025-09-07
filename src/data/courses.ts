export interface Course {
  code: string;
  title: string;
  level: 'Undergraduate' | 'Postgraduate';
  school: string;
  overview?: string;
}

export const courses: Course[] = [
  { code: 'CS101', title: 'Computer Science BSc', level: 'Undergraduate', school: 'Computing', overview: 'A broad foundation in computing.' },
  { code: 'ENG500', title: 'Advanced Engineering MSc', level: 'Postgraduate', school: 'Engineering', overview: 'Cutting-edge engineering skills.' },
  { code: 'ART200', title: 'Fine Arts BA', level: 'Undergraduate', school: 'Arts', overview: 'Explore creative practices.' }
];
