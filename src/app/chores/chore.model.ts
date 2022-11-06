export class Chore {
  constructor(
    public id: number,
    public choreName: string,
    public description: string,
    public imagePath: string,
    public dueDate: string,
    public amount: number,
    public completedDate: string,
    ) { }
}
