import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation((returns) => StudentType)
  async createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query((returns) => [StudentType])
  async getStudents() {
    return this.studentService.getStudents();
  }
  @Query((returns) => StudentType)
  getStudentById(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }
}
