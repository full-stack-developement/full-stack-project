import { MigrationInterface, QueryRunner } from "typeorm";

export class addResetPasswordColumns1677889661521 implements MigrationInterface {
    name = 'addResetPasswordColumns1677889661521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isActive" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

}
