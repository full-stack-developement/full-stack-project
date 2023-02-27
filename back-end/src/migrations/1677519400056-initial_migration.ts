import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1677519400056 implements MigrationInterface {
    name = 'initialMigration1677519400056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "cep" numeric(8) NOT NULL, "state" character varying NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle_comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "content" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "vehicleId" uuid, "userId" uuid, CONSTRAINT "PK_dec9d23c4b2b2e8ecb3e25de01f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle_gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "vehicleId" uuid, CONSTRAINT "PK_be854d64d2f09261874391fa4cb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicle" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "announcementType" character varying NOT NULL, "vehicleType" character varying NOT NULL, "title" character varying NOT NULL, "year" numeric(4) NOT NULL, "km" numeric NOT NULL, "price" numeric(12,2) NOT NULL, "description" character varying, "coverImage" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, "userId" uuid, CONSTRAINT "PK_187fa17ba39d367e5604b3d1ec9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "accountType" character varying NOT NULL, "full_name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" numeric(11) NOT NULL, "phone" numeric(10) NOT NULL, "birthDate" date NOT NULL, "description" character varying, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle_comments" ADD CONSTRAINT "FK_fafc16f8c31e382f0905ba09871" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle_comments" ADD CONSTRAINT "FK_ae61c2c821eadf24d70158f42d7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle_gallery" ADD CONSTRAINT "FK_803dd4612955b231f0457d0e791" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicle" ADD CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle" DROP CONSTRAINT "FK_86aea53f0b2b4f046e25e8315d1"`);
        await queryRunner.query(`ALTER TABLE "vehicle_gallery" DROP CONSTRAINT "FK_803dd4612955b231f0457d0e791"`);
        await queryRunner.query(`ALTER TABLE "vehicle_comments" DROP CONSTRAINT "FK_ae61c2c821eadf24d70158f42d7"`);
        await queryRunner.query(`ALTER TABLE "vehicle_comments" DROP CONSTRAINT "FK_fafc16f8c31e382f0905ba09871"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "vehicle"`);
        await queryRunner.query(`DROP TABLE "vehicle_gallery"`);
        await queryRunner.query(`DROP TABLE "vehicle_comments"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
