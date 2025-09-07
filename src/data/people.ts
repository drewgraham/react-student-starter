export interface Person {
  id: number;
  name: string;
  role: string;
  department: string;
  email: string;
}

export const people: Person[] = [
  { id: 1, name: 'Dr Alice Smith', role: 'Lecturer', department: 'Computing', email: 'alice@example.ac.uk' },
  { id: 2, name: 'Prof Bob Brown', role: 'Head of Engineering', department: 'Engineering', email: 'bob@example.ac.uk' },
  { id: 3, name: 'Ms Carol Jones', role: 'Administrator', department: 'Arts', email: 'carol@example.ac.uk' },
];
