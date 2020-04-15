exports.v1 = {
    match: require('./apis/match/v1'),
    summoner: require('./apis/summoner/v1'),
};

exports.v4 = {
    league: require('./apis/league/v4'),
    match: require('./apis/match/v4'),
    summoner: require('./apis/summoner/v4'),
};