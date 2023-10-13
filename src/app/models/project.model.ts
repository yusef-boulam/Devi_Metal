export class Project {
  id!: number;

  title!: string;
  description!: string;
  logoUrl!: string;
  imageUrl!: string;
  tag!: string;
  page!: string;
  images!: {
    src: string;
    alt: string;
  }[];
}
