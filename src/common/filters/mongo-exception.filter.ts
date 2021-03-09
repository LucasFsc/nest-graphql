import { Catch, ConflictException, ExceptionFilter } from '@nestjs/common'
import { MongoError } from 'mongodb'

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError) {
    switch (exception.code) {
      case 11000:
        const [key, value] = Object.entries({ ...exception }?.['keyValue'])?.[0]
        if (key && value) {
          throw new ConflictException(`${key} '${value}' is already in use`)
        } else {
          throw new ConflictException()
        }
    }
  }
}
