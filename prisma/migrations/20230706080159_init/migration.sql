-- CreateTable
CREATE TABLE "Sourness" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "pacified" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
