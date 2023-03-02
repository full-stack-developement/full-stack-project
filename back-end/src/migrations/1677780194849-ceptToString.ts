import { MigrationInterface, QueryRunner } from "typeorm";

export class ceptToString1677780194849 implements MigrationInterface {
    name = 'ceptToString1677780194849'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "cep" character varying(8) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "address" ADD "cep" numeric(8,0) NOT NULL`);
    }

}
