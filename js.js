var universities = [{2016:1,2015:1,name:"Cambridge"},{2016:2,2015:2,name:"Oxford"},{2016:3,2015:3,name:"St Andrews"},
                    {2016:4,2015:6,name:"Surrey"},{2016:5,2015:4,name:"Bath"},{2016:6,2015:8,name:"Durham"},
                    {2016:6,2015:9,name:"Warwick"},{2016:8,2015:5,name:"Imperial College"},{2016:9,2015:12,name:"Exeter"},
                    {2016:10,2015:10,name:"Lancaster"},{2016:11,2015:15,name:"Loughborough"},{2016:12,2015:11,name:"UCL"},
                    {2016:13,2015:7,name:"LSE"},{2016:14,2015:19,name:"Southampton"},
                    {2016:15,2015:27,name:"Coventry"},{2016:16,2015:20,name:"Kent"},{2016:17,2015:17,name:"Birmingham"},
                    {2016:18,2015:13,name:"Heriot-Watt"},{2016:19,2015:43,name:"Sussex"},{2016:20,2015:18,name:"Edinburgh"},
                    {2016:20,2015:14,name:"UEA"},{2016:22,2015:16,name:"York"},{2016:23,2015:28,name:"Leeds"},
                    {2016:24,2015:25,name:"Glasgow"},{2016:25,2015:30,name:"Reading"},{2016:26,2015:24,name:"SOAS"},{2016:27,2015:26,name:"Cardiff"},{2016:28,2015:22,name:"Nottingham"},{2016:29,2015:33,name:"Manchester"},{2016:29,2015:28,name:"Newcastle"},{2016:31,2015:53,name:"Falmouth"},{2016:32,2015:21,name:"Leicester"},{2016:33,2015:38,name:"Strathclyde"},{2016:33,2015:22,name:"Aston"},{2016:35,2015:34,name:"Bristol"},{2016:36,2015:40,name:"King's College London"},{2016:37,2015:35,name:"City"},{2016:38,2015:47,name:"Dundee"},{2016:38,2015:32,name:"Queen Mary"},{2016:40,2015:36,name:"Royal Holloway"},{2016:41,2015:41,name:"Aberdeen"},{2016:42,2015:41,name:"Keele"},{2016:42,2015:37,name:"Sheffield"},{2016:44,2015:31,name:"UAL"},{2016:45,2015:46,name:"Queen's, Belfast"},{2016:46,2015:51,name:"Robert Gordon"},{2016:47,2015:54,name:"Essex"},{2016:48,2015:39,name:"Oxford Brookes"},{2016:49,2015:55,name:"Portsmouth"},{2016:50,2015:48,name:"Goldsmiths"},{2016:51,2015:57,name:"Nottingham Trent"},{2016:52,2015:57,name:"Swansea"},{2016:53,2015:52,name:"Brunel"},{2016:54,2015:75,name:"Hull"},{2016:54,2015:65,name:"Lincoln"},{2016:54,2015:74,name:"Gloucestershire"},{2016:57,2015:82,name:"Bangor"},{2016:58,2015:80,name:"Liverpool John Moores"},{2016:59,2015:45,name:"Liverpool"},{2016:59,2015:56,name:"Huddersfield"},{2016:61,2015:69,name:"Bath Spa"},{2016:61,2015:44,name:"Northampton"},{2016:63,2015:71,name:"Bournemouth"},{2016:64,2015:78,name:"Edinburgh Napier"},{2016:65,2015:63,name:"Stirling"},{2016:65,2015:85,name:"De Montfort"},{2016:67,2015:62,name:"Brighton"},{2016:68,2015:60,name:"Northumbria"},{2016:69,2015:75,name:"Edge Hill"},{2016:69,2015:61,name:"Chester"},{2016:71,2015:80,name:"Chichester"},{2016:72,2015:83,name:"Bradford"},{2016:73,2015:50,name:"Derby"},{2016:74,2015:73,name:"Sheffield Hallam"},{2016:75,2015:59,name:"Winchester"},{2016:76,2015:69,name:"Queen Margaret"},{2016:77,2015:71,name:"Manchester Met"},{2016:78,2015:100,name:"Roehampton"},{2016:79,2015:66,name:"Hertfordshire"},{2016:79,2015:49,name:"UWE Bristol"},{2016:81,2015:86,name:"Middlesex"},{2016:82,2015:93,name:"Ulster"},{2016:83,2015:90,name:"Staffordshire"},{2016:84,2015:111,name:"Leeds Trinity"},{2016:85,2015:67,name:"Central Lancashire"},{2016:86,2015:88,name:"Birmingham City"},{2016:87,2015:68,name:"Plymouth"},{2016:88,2015:105,name:"Anglia Ruskin"},{2016:89,2015:91,name:"Glasgow Caledonian"},{2016:90,2015:94,name:"Salford"},{2016:91,2015:84,name:"Teesside"},{2016:92,2015:87,name:"Greenwich"},{2016:93,2015:101,name:"Abertay Dundee"},{2016:94,2015:97,name:"West London"},{2016:95,2015:98,name:"Cardiff Met"},{2016:96,2015:104,name:"Cumbria"},{2016:97,2015:98,name:"Kingston"},{2016:98,2015:115,name:"Bedfordshire"},{2016:99,2015:78,name:"University Campus Suffolk"},{2016:100,2015:96,name:"St Mary's, Twickenham"},{2016:101,2015:95,name:"Westminster"},{2016:101,2015:92,name:"Canterbury Christ Church"},{2016:103,2015:64,name:"Glyndwr"},{2016:104,name:"Liverpool Hope"},{2016:105,2015:113,name:"Bolton"},{2016:106,2015:109,name:"East London"},{2016:107,2015:89,name:"York St John"},{2016:108,2015:103,name:"Worcester"},{2016:109,2015:77,name:"Sunderland"},{2016:110,2015:106,name:"Aberystwyth"},{2016:111,2015:112,name:"London South Bank"},{2016:112,name:"Newman"},{2016:113,2015:102,name:"South Wales"},{2016:114,2015:107,name:"Southampton Solent"},{2016:115,2015:110,name:"West of Scotland"},{2016:116,2015:108,name:"Leeds Beckett"},{2016:117,name:"Trinity Saint David"},{2016:118,2015:116,name:"London Met"},{2016:119,2015:114,name:"Bucks New University"}],
    chartWidth = 500,
    labelWidth = 180,
    // container:
    chart = d3.select("#slopegraph").append("svg").attr("width", chartWidth).attr("height", 2180);

// titles
chart.append("text").attr("class", "title")
    .text("2015")
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("x", labelWidth-10);
chart.append("text").attr("class", "title")
    .text("2016")
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("x", chartWidth-labelWidth+10);

universities.map(function (uniData) {
    var mouseover = function () {
        d3.selectAll("." + this.classList[0]).classed("mouseover", true);
    },
    mouseout = function () {
        d3.selectAll("." + this.classList[0]).classed("mouseover", false);
    },
    addLabel = function (chart,name,ranking,side) {
        var label = chart.append("g")
                .attr("class", className(name))
                .on("mouseover", mouseover)
                .on("mouseout", mouseout),
            text = label.append("text")
                .text(name)
                .attr("y", 20 + ranking*18);
            ranking = label.append("text")
                .text(ranking)
                .attr("y", 20 + ranking*18)
                .attr("text-anchor", "middle");

        if (side == "left") {
            label.attr("text-anchor", "end");
            text.attr("x", labelWidth-24);
            ranking.attr("x", labelWidth-10);
        } else {
            text.attr("x", chartWidth-labelWidth+24);
            ranking.attr("x", chartWidth-labelWidth+10);
        }

        return label;
    },
    className = function (name) {
        // remove spaces and other non-word characters
        return name.replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
    };

    addLabel(chart,uniData.name,uniData[2016], "right");

    if (uniData[2015]) { // if not a new entry
        addLabel(chart, uniData.name, uniData[2015], "left");
    } else {
        uniData[2015] = 117;
    }
    
    var lineGroup = chart.append("g")
        .attr("class", className(uniData.name))
        .on("mouseover", mouseover)
        .on("mouseout", mouseout);

    lineGroup.append("line")
        .attr("x1", labelWidth+8)
        .attr("x2", chartWidth-labelWidth-8)
        .attr("y1", 20 + uniData[2015]*18 - 4)
        .attr("y2", 20 + uniData[2016]*18 - 4);
    lineGroup.append("circle")
        .attr("cx", labelWidth+8)
        .attr("cy", 20 + uniData[2015]*18 - 4)
        .attr("r", 2);
    lineGroup.append("circle")
        .attr("cx", chartWidth-labelWidth-8)
        .attr("cy", 20 + uniData[2016]*18 - 4)
        .attr("r", 2);
});
