import { MigrationInterface, QueryRunner } from "typeorm";

export class addUserId1676911704727 implements MigrationInterface {
    name = 'addUserId1676911704727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "user_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "user_id"`);
    }

}
