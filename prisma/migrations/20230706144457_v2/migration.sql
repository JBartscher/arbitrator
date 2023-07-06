/*
  Warnings:

  - Added the required column `name` to the `Sourness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Sourness` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sourness" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "pacified" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Sourness" ("createdAt", "id", "pacified", "updatedAt") SELECT "createdAt", "id", "pacified", "updatedAt" FROM "Sourness";
DROP TABLE "Sourness";
ALTER TABLE "new_Sourness" RENAME TO "Sourness";
CREATE UNIQUE INDEX "Sourness_name_key" ON "Sourness"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
