import { Injectable } from '@nestjs/common';

export enum ConfigKey {
  REDIS_ENDPOINT = 'REDIS_ENDPOINT',
}

@Injectable()
export class SystemConfigProvider {
  POSTGRES_SYNCHRONIZE = this.getEnv("POSTGRES_SYNCHRONIZE", "false");
  
  public getPostgresUrl() {
    return this.isTest
      ? this.getEnv('POSTGRES_TEST_URL')
      : this.getEnv('POSTGRES_URL');
  }

  public getRedisUrl() {
    return this.getEnv('REDIS_URL');
  }

  public get isProduction() {
    return this.getEnv('NODE_ENV', 'development') === 'production';
  }

  public get isTest() {
    return this.getEnv('NODE_ENV', 'development') === 'test';
  }

  public get isDebugging() {
    return !!this.getEnv('DEBUG');
  }

  public get port(): number {
    return parseInt(this.getEnv('PORT', '3001'), 10);
  }

  public get enableSwagger() {
    return !this.isTest && (!this.isProduction || this.isDebugging);
  }

  public getEnv(key: string, defaultValue?: string) {
    return process.env[key] || defaultValue;
  }
}

const systemConfig = new SystemConfigProvider();

export default systemConfig;
