import { ErrorRequestHandler, Express } from 'express'
import { ValidationError } from 'yup'
import fs from 'fs'

interface ValidationErrors {
  [key: string]: string[]
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {}

    const requestImages = request.files as Express.Multer.File[]
    requestImages.map(image => fs.unlinkSync(image.path))

    error.inner.forEach(err => {
      errors[err.path] = err.errors
    })

    return response.status(400).json({
      message: 'Validation fails',
      errors
    })
  }

  console.log(error)

  return response.status(500).json({
    message: 'Internal Server Error'
  })
}

export default errorHandler
