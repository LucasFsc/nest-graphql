import type { Config } from '@jest/types'

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    rootDir: 'src',
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '@/decorators/(.*)': '<rootDir>/common/decorators/$1',
      '@/enums/(.*)': '<rootDir>/common/enums/$1',
      '@/filters/(.*)': '<rootDir>/common/filters/$1',
      '@/guards/(.*)': '<rootDir>/common/guards/$1',
      '@/strategies/(.*)': '<rootDir>/common/strategies/$1',
      '@/(.*)': '<rootDir>/$1'
    }
  }
}
