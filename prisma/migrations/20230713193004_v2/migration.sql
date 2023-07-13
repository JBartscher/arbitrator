-- CreateTable
CREATE TABLE "Sourness" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "partner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sourness_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Sourness_name_key" ON "Sourness"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sourness_partner_key" ON "Sourness"("partner");
