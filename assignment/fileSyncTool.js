const fs = require("fs").promises;
const path = require("path");

const srcDir = "D:\\B_L_Assignments\\NodeJS_Programming";
const destDir = "D:\\B_L_Assignments\\Unix_commands";

async function sync() {
    try {
        await fs.access(srcDir);
        await fs.access(destDir);
    } catch {
        console.log("One of the folders does not exist");
        return;
    }

    const files = await fs.readdir(srcDir);

    for (let file of files) {
        const srcPath = path.join(srcDir, file);
        const destPath = path.join(destDir, file);

        try {
            const srcStat = await fs.stat(srcPath);

            if (srcStat.isFile()) {
                try {
                    const destStat = await fs.stat(destPath);

                    if (srcStat.mtime > destStat.mtime) {
                        await fs.copyFile(srcPath, destPath);
                        console.log("Updated:", file);
                    }
                } catch {
                    await fs.copyFile(srcPath, destPath);
                    console.log("Copied:", file);
                }
            }
        } catch {
            console.log("Error with file:", file);
        }
    }

    console.log("Synchronization complete");
}

sync();
