const {
    BOT_ID,
    BE_TEAM,
    FE_TEAM,
    QA_TEAM,
    PORT = 5500,
} = process.env;

module.exports = {
    BOT_ID,
    BE_TEAM,
    FE_TEAM,
    QA_TEAM,
    PORT: Number(PORT),
}