import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1676910225160 implements MigrationInterface {
    name = 'initialMigration1676910225160'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "announcement_gallery" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "image" character varying NOT NULL, "announcementId" uuid, CONSTRAINT "PK_831aec142131f18a25490cc05c0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcement" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "type" character varying NOT NULL, "vehicleType" character varying NOT NULL, "title" character varying NOT NULL, "year" numeric(4) NOT NULL, "km" numeric NOT NULL, "price" numeric(12,2) NOT NULL, "description" character varying, "coverImage" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_e0ef0550174fd1099a308fd18a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announcement_gallery" ADD CONSTRAINT "FK_f2e8a50f847f022df55e00972e4" FOREIGN KEY ("announcementId") REFERENCES "announcement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement_gallery" DROP CONSTRAINT "FK_f2e8a50f847f022df55e00972e4"`);
        await queryRunner.query(`DROP TABLE "announcement"`);
        await queryRunner.query(`DROP TABLE "announcement_gallery"`);
    }

}
