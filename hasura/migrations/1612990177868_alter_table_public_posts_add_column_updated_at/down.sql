DROP TRIGGER IF EXISTS "set_public_posts_updated_at" ON "public"."posts";
ALTER TABLE "public"."posts" DROP COLUMN "updated_at";
