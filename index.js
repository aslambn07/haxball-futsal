import http from 'http';
import HaxballJS from 'haxball.js';

// 1. سيرفور HTTP صغير باش Render يبقى مأكتيفي السيرفور ومينعسش
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end("HaxBall Futsal Room 24/7");
});
server.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

// 2. تشغيل روم هاكسبول فـ الخلفية
(typeof HaxballJS === 'function' ? HaxballJS() : HaxballJS).then((HBInit) => {
  console.log("Starting HaxBall Headless Room...");

  const HAXBALL_TOKEN = process.env.HAXBALL_TOKEN || "";
  const CONFIG = {
    roomName: "⚽ [MA] REAL FUTSAL 24/7 | 1v1 - 2v2 - 3v3",
    maxPlayers: 15,
    public: true,
    adminPassword: "Aslam_07", // 🔑 كلمة السر ديال الأدمين
    futsalBall: {
      radius: 6.4,
      color: 0xEAFF00, // لون أصفر فوتسال
      invMass: 1.1,
      damping: 0.99,   // سرعة وسلاسة الكرة
      bounciness: 0.5
    }
  };
  
  // 🏟️ المابات الرسمية (HaxMaps 2v2 و 3v3)
  const STADIUM_PRACTICE = "{\"name\":\"Futsal Solo Practice\",\"width\":420,\"height\":200,\"spawnDistance\":180,\"bg\":{\"type\":\"hockey\",\"width\":368,\"height\":171,\"kickOffRadius\":65,\"cornerRadius\":0},\"vertexes\":[{\"x\":-368,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-368,\"y\":65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-368,\"y\":-65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-368,\"y\":-171,\"trait\":\"ballArea\",\"bCoef\":1,\"cMask\":[\"ball\"]},{\"x\":368,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":368,\"y\":65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":368,\"y\":-65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":368,\"y\":-171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":0,\"y\":65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-65,\"trait\":\"line\"},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":-384,\"y\":-65},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":384,\"y\":-65},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":-384,\"y\":65},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":384,\"y\":65},{\"bCoef\":1,\"trait\":\"ballArea\",\"x\":368,\"y\":171},{\"bCoef\":1,\"trait\":\"ballArea\",\"x\":368,\"y\":-171},{\"bCoef\":0,\"trait\":\"line\",\"x\":0,\"y\":171},{\"bCoef\":0,\"trait\":\"line\",\"x\":0,\"y\":-171},{\"x\":0,\"y\":65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-65,\"trait\":\"kickOffBarrier\"},{\"x\":377,\"y\":-65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":377,\"y\":-171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":-65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":-171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":377,\"y\":65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":377,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":0,\"y\":199,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-199,\"trait\":\"kickOffBarrier\"}],\"segments\":[{\"v0\":0,\"v1\":1,\"trait\":\"ballArea\"},{\"v0\":2,\"v1\":3,\"trait\":\"ballArea\"},{\"v0\":4,\"v1\":5,\"trait\":\"ballArea\"},{\"v0\":6,\"v1\":7,\"trait\":\"ballArea\"},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":2,\"v1\":10,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":6,\"v1\":11,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":1,\"v1\":12,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":5,\"v1\":13,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":10,\"v1\":12,\"x\":-585,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":11,\"v1\":13,\"x\":585,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":1,\"v1\":0,\"cMask\":[\"ball\"],\"x\":-368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":5,\"v1\":4,\"cMask\":[\"ball\"],\"x\":368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":2,\"v1\":3,\"cMask\":[\"ball\"],\"x\":-368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":6,\"v1\":7,\"cMask\":[\"ball\"],\"x\":368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":0,\"v1\":14,\"y\":171},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":3,\"v1\":15,\"y\":-171},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":16,\"v1\":17},{\"curve\":-180,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":9,\"v1\":8},{\"curve\":180,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":19,\"v1\":18},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":2,\"v1\":1},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":6,\"v1\":5},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":20,\"v1\":21,\"cMask\":[\"ball\"],\"x\":330},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":22,\"v1\":23,\"cMask\":[\"ball\"],\"x\":-330},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":24,\"v1\":25,\"cMask\":[\"ball\"],\"x\":-330},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":26,\"v1\":27,\"cMask\":[\"ball\"],\"x\":330}],\"goals\":[{\"p0\":[-377,-65],\"p1\":[-377,65],\"team\":\"red\"},{\"p0\":[377,65],\"p1\":[377,-65],\"team\":\"blue\"}],\"discs\":[{\"pos\":[-368,65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[-368,-65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[368,65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[368,-65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5}],\"planes\":[{\"normal\":[0,1],\"dist\":-171,\"trait\":\"ballArea\"},{\"normal\":[0,-1],\"dist\":-171,\"trait\":\"ballArea\"},{\"normal\":[0,1],\"dist\":-200,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[0,-1],\"dist\":-200,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[1,0],\"dist\":-420,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[-1,0],\"dist\":-420,\"bCoef\":0.2,\"cMask\":[\"all\"]}],\"traits\":{\"ballArea\":{\"vis\":false,\"bCoef\":1,\"cMask\":[\"ball\"]},\"goalPost\":{\"radius\":8,\"invMass\":0,\"bCoef\":1},\"goalNet\":{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"]},\"kickOffBarrier\":{\"vis\":false,\"bCoef\":0.1,\"cGroup\":[\"redKO\",\"blueKO\"],\"cMask\":[\"red\",\"blue\"]},\"line\":{\"vis\":true,\"bCoef\":0,\"cMask\":[\"\"]},\"arco\":{\"radius\":2,\"cMask\":[\"n/d\"],\"color\":\"cccccc\"}},\"playerPhysics\":{\"acceleration\":0.11,\"kickingAcceleration\":0.1,\"kickStrength\":7},\"ballPhysics\":{\"radius\":6.4,\"color\":\"EAFF00\"}}";
  const STADIUM_2V2 = "{\"name\":\"Futsal 1x1 2x2 from HaxMaps\",\"width\":420,\"height\":200,\"spawnDistance\":180,\"bg\":{\"type\":\"hockey\",\"width\":368,\"height\":171,\"kickOffRadius\":65,\"cornerRadius\":0},\"vertexes\":[{\"x\":-368,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-368,\"y\":65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-368,\"y\":-65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-368,\"y\":-171,\"trait\":\"ballArea\",\"bCoef\":1,\"cMask\":[\"ball\"]},{\"x\":368,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":368,\"y\":65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":368,\"y\":-65,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":368,\"y\":-171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":0,\"y\":65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-65,\"trait\":\"line\"},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":-384,\"y\":-65},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":384,\"y\":-65},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":-384,\"y\":65},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":384,\"y\":65},{\"bCoef\":1,\"trait\":\"ballArea\",\"x\":368,\"y\":171},{\"bCoef\":1,\"trait\":\"ballArea\",\"x\":368,\"y\":-171},{\"bCoef\":0,\"trait\":\"line\",\"x\":0,\"y\":171},{\"bCoef\":0,\"trait\":\"line\",\"x\":0,\"y\":-171},{\"x\":0,\"y\":65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-65,\"trait\":\"kickOffBarrier\"},{\"x\":377,\"y\":-65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":377,\"y\":-171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":-65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":-171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-377,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":377,\"y\":65,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":377,\"y\":171,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":0,\"y\":199,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-65,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-199,\"trait\":\"kickOffBarrier\"}],\"segments\":[{\"v0\":0,\"v1\":1,\"trait\":\"ballArea\"},{\"v0\":2,\"v1\":3,\"trait\":\"ballArea\"},{\"v0\":4,\"v1\":5,\"trait\":\"ballArea\"},{\"v0\":6,\"v1\":7,\"trait\":\"ballArea\"},{\"v0\":8,\"v1\":9,\"trait\":\"kickOffBarrier\",\"curve\":180,\"cGroup\":[\"blueKO\"]},{\"v0\":8,\"v1\":9,\"trait\":\"kickOffBarrier\",\"curve\":-180,\"cGroup\":[\"redKO\"]},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":2,\"v1\":10,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":6,\"v1\":11,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":1,\"v1\":12,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"],\"trait\":\"goalNet\",\"v0\":5,\"v1\":13,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":10,\"v1\":12,\"x\":-585,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":11,\"v1\":13,\"x\":585,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":1,\"v1\":0,\"cMask\":[\"ball\"],\"x\":-368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":5,\"v1\":4,\"cMask\":[\"ball\"],\"x\":368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":2,\"v1\":3,\"cMask\":[\"ball\"],\"x\":-368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":6,\"v1\":7,\"cMask\":[\"ball\"],\"x\":368},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":0,\"v1\":14,\"y\":171},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":3,\"v1\":15,\"y\":-171},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":16,\"v1\":17},{\"curve\":-180,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":9,\"v1\":8},{\"curve\":180,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":19,\"v1\":18},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":2,\"v1\":1},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":6,\"v1\":5},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":20,\"v1\":21,\"cMask\":[\"ball\"],\"x\":330},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":22,\"v1\":23,\"cMask\":[\"ball\"],\"x\":-330},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":24,\"v1\":25,\"cMask\":[\"ball\"],\"x\":-330},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":26,\"v1\":27,\"cMask\":[\"ball\"],\"x\":330},{\"v0\":28,\"v1\":29,\"trait\":\"kickOffBarrier\"},{\"v0\":30,\"v1\":31,\"trait\":\"kickOffBarrier\"}],\"goals\":[{\"p0\":[-377,-65],\"p1\":[-377,65],\"team\":\"red\"},{\"p0\":[377,65],\"p1\":[377,-65],\"team\":\"blue\"}],\"discs\":[{\"pos\":[-368,65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[-368,-65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[368,65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[368,-65],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5}],\"planes\":[{\"normal\":[0,1],\"dist\":-171,\"trait\":\"ballArea\"},{\"normal\":[0,-1],\"dist\":-171,\"trait\":\"ballArea\"},{\"normal\":[0,1],\"dist\":-200,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[0,-1],\"dist\":-200,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[1,0],\"dist\":-420,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[-1,0],\"dist\":-420,\"bCoef\":0.2,\"cMask\":[\"all\"]}],\"traits\":{\"ballArea\":{\"vis\":false,\"bCoef\":1,\"cMask\":[\"ball\"]},\"goalPost\":{\"radius\":8,\"invMass\":0,\"bCoef\":1},\"goalNet\":{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"]},\"kickOffBarrier\":{\"vis\":false,\"bCoef\":0.1,\"cGroup\":[\"redKO\",\"blueKO\"],\"cMask\":[\"red\",\"blue\"]},\"line\":{\"vis\":true,\"bCoef\":0,\"cMask\":[\"\"]},\"arco\":{\"radius\":2,\"cMask\":[\"n/d\"],\"color\":\"cccccc\"}},\"playerPhysics\":{\"acceleration\":0.11,\"kickingAcceleration\":0.1,\"kickStrength\":7},\"ballPhysics\":{\"radius\":6.4,\"color\":\"EAFF00\"}}";
  const STADIUM_3V3 = "{\"name\":\"Futsal 3v3 Zimska Liga from HaxMaps\",\"width\":755,\"height\":339,\"spawnDistance\":310,\"bg\":{\"type\":\"hockey\",\"width\":665,\"height\":290,\"kickOffRadius\":80,\"cornerRadius\":0},\"vertexes\":[{\"x\":-665,\"y\":290,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-665,\"y\":80,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-665,\"y\":-80,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-665,\"y\":-290,\"trait\":\"ballArea\",\"bCoef\":1,\"cMask\":[\"ball\"]},{\"x\":665,\"y\":290,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":665,\"y\":80,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":665,\"y\":-80,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":665,\"y\":-290,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":0,\"y\":306,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":80,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-80,\"trait\":\"line\"},{\"x\":0,\"y\":-306,\"trait\":\"kickOffBarrier\"},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":-693,\"y\":-80},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":693,\"y\":-80},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":-693,\"y\":80},{\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"x\":693,\"y\":80},{\"trait\":\"line\",\"x\":-665,\"y\":-215},{\"trait\":\"line\",\"x\":-500,\"y\":-50},{\"trait\":\"line\",\"x\":665,\"y\":-215},{\"trait\":\"line\",\"x\":500,\"y\":-50},{\"trait\":\"line\",\"x\":-665,\"y\":215},{\"trait\":\"line\",\"x\":-500,\"y\":50},{\"trait\":\"line\",\"x\":665,\"y\":215},{\"trait\":\"line\",\"x\":500,\"y\":50},{\"bCoef\":1,\"trait\":\"ballArea\",\"x\":665,\"y\":290},{\"bCoef\":1,\"trait\":\"ballArea\",\"x\":665,\"y\":-290},{\"bCoef\":0,\"trait\":\"line\",\"x\":0,\"y\":290},{\"bCoef\":0,\"trait\":\"line\",\"x\":0,\"y\":-290},{\"x\":0,\"y\":80,\"trait\":\"kickOffBarrier\"},{\"x\":0,\"y\":-80,\"trait\":\"kickOffBarrier\"},{\"x\":674,\"y\":-80,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":674,\"y\":-290,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-674,\"y\":-80,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-674,\"y\":-290,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-674,\"y\":80,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":-674,\"y\":290,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":674,\"y\":80,\"trait\":\"line\",\"cMask\":[\"ball\"],\"bCoef\":1},{\"x\":674,\"y\":290,\"trait\":\"ballArea\",\"cMask\":[\"ball\"],\"bCoef\":1}],\"segments\":[{\"v0\":0,\"v1\":1,\"trait\":\"ballArea\"},{\"v0\":2,\"v1\":3,\"trait\":\"ballArea\"},{\"v0\":4,\"v1\":5,\"trait\":\"ballArea\"},{\"v0\":6,\"v1\":7,\"trait\":\"ballArea\"},{\"v0\":8,\"v1\":9,\"trait\":\"kickOffBarrier\"},{\"v0\":9,\"v1\":10,\"trait\":\"kickOffBarrier\",\"curve\":180,\"cGroup\":[\"blueKO\"]},{\"v0\":9,\"v1\":10,\"trait\":\"kickOffBarrier\",\"curve\":-180,\"cGroup\":[\"redKO\"]},{\"v0\":10,\"v1\":11,\"trait\":\"kickOffBarrier\"},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":2,\"v1\":12,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":6,\"v1\":13,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":1,\"v1\":14,\"color\":\"FFFFFF\",\"curve\":35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":5,\"v1\":15,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":12,\"v1\":14,\"x\":-585,\"color\":\"FFFFFF\",\"curve\":-35},{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"ball\"],\"trait\":\"goalNet\",\"v0\":13,\"v1\":15,\"x\":585,\"color\":\"FFFFFF\",\"curve\":35},{\"color\":\"FFFFFF\",\"trait\":\"line\",\"v0\":16,\"v1\":17,\"curve\":90},{\"color\":\"FFFFFF\",\"trait\":\"line\",\"v0\":18,\"v1\":19,\"curve\":-90},{\"color\":\"FFFFFF\",\"trait\":\"line\",\"v0\":20,\"v1\":21,\"curve\":-90},{\"color\":\"FFFFFF\",\"trait\":\"line\",\"v0\":22,\"v1\":23,\"curve\":90},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":17,\"v1\":21,\"curve\":0},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":19,\"v1\":23,\"curve\":0},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":1,\"v1\":0,\"cMask\":[\"ball\"],\"x\":-665},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":5,\"v1\":4,\"cMask\":[\"ball\"],\"x\":665},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":2,\"v1\":3,\"cMask\":[\"ball\"],\"x\":-665},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":6,\"v1\":7,\"cMask\":[\"ball\"],\"x\":665},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":0,\"v1\":24,\"y\":290},{\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":3,\"v1\":25,\"y\":-290},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":26,\"v1\":27},{\"curve\":-180,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":10,\"v1\":9},{\"curve\":180,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":29,\"v1\":28},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":2,\"v1\":1},{\"curve\":0,\"vis\":true,\"color\":\"FFFFFF\",\"bCoef\":0,\"trait\":\"line\",\"v0\":6,\"v1\":5},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":30,\"v1\":31,\"cMask\":[\"ball\"],\"x\":614},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":32,\"v1\":33,\"cMask\":[\"ball\"],\"x\":-614},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":34,\"v1\":35,\"cMask\":[\"ball\"],\"x\":-614},{\"vis\":false,\"color\":\"FFFFFF\",\"bCoef\":1,\"trait\":\"ballArea\",\"v0\":36,\"v1\":37,\"cMask\":[\"ball\"],\"x\":614}],\"goals\":[{\"p0\":[-674,-80],\"p1\":[-674,80],\"team\":\"red\"},{\"p0\":[674,80],\"p1\":[674,-80],\"team\":\"blue\"}],\"discs\":[{\"pos\":[-665,80],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[-665,-80],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[665,80],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5},{\"pos\":[665,-80],\"trait\":\"goalPost\",\"color\":\"FFFFFF\",\"radius\":5}],\"planes\":[{\"normal\":[0,1],\"dist\":-290,\"trait\":\"ballArea\"},{\"normal\":[0,-1],\"dist\":-290,\"trait\":\"ballArea\"},{\"normal\":[0,1],\"dist\":-339,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[0,-1],\"dist\":-339,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[1,0],\"dist\":-755,\"bCoef\":0.2,\"cMask\":[\"all\"]},{\"normal\":[-1,0],\"dist\":-755,\"bCoef\":0.2,\"cMask\":[\"all\"]}],\"traits\":{\"ballArea\":{\"vis\":false,\"bCoef\":1,\"cMask\":[\"ball\"]},\"goalPost\":{\"radius\":8,\"invMass\":0,\"bCoef\":1},\"goalNet\":{\"vis\":true,\"bCoef\":0.1,\"cMask\":[\"all\"]},\"kickOffBarrier\":{\"vis\":false,\"bCoef\":0.1,\"cGroup\":[\"redKO\",\"blueKO\"],\"cMask\":[\"red\",\"blue\"]},\"line\":{\"vis\":true,\"bCoef\":0,\"cMask\":[\"\"]},\"arco\":{\"radius\":2,\"cMask\":[\"n/d\"],\"color\":\"cccccc\"}},\"playerPhysics\":{\"acceleration\":0.11,\"kickingAcceleration\":0.1,\"kickStrength\":7},\"ballPhysics\":{\"radius\":6.4,\"color\":\"9CF0E5\"}}";
  
  const room = HBInit({
    roomName: CONFIG.roomName,
    maxPlayers: CONFIG.maxPlayers,
    public: CONFIG.public,
    noPlayer: true,
    token: HAXBALL_TOKEN
  });
  
  let specQueue = [];
  let joinOrder = []; // كيسجل ترتيب دخول اللاعبين
  let pickingCaptain = null;
  let neededPicks = 0;
  let currentMode = ""; // "practice", "2v2", "3v3"
  
  // 🎯 تتبع لمسات الكرة للإعلانات
  let lastKicker = null;
  let secondLastKicker = null;
  let lastKickTime = 0;
  
  // ترتيب اللاعبين حسب الأقدمية فـ الروم
  function getPlayersByJoinTime() {
    const players = room.getPlayerList();
    return players.sort((a, b) => {
      const idxA = joinOrder.indexOf(a.id);
      const idxB = joinOrder.indexOf(b.id);
      return (idxA === -1 ? 999 : idxA) - (idxB === -1 ? 999 : idxB);
    });
  }
  
  // ==============================================================================
  // 🔄 1. ضبط التوازن وتبديل المابات أوتوماتيكياً (Auto Balance & Scaling)
  // ==============================================================================
  function balanceAndCheckStadium() {
    const players = getPlayersByJoinTime();
    const count = players.length;
  
    // 1. لاعب واحد بوحدو (Entrainement Solo)
    if (count <= 1) {
      currentMode = "practice";
      room.stopGame();
      room.setCustomStadium(STADIUM_PRACTICE);
      room.setScoreLimit(0);
      room.setTimeLimit(0);
      if (players[0]) {
        room.setPlayerTeam(players[0].id, 1); // كيدخل لـ Red والكرة عندو
      }
      room.sendAnnouncement("🎯 وضع التدريب الفردي (Solo Practice)! سيري وتيري بوحدك.");
      room.startGame();
      return;
    }
  
    // 2. جوج لاعبين (1v1)
    if (count === 2) {
      currentMode = "2v2";
      room.stopGame();
      room.setCustomStadium(STADIUM_2V2);
      room.setScoreLimit(3);
      room.setTimeLimit(3);
      room.setPlayerTeam(players[0].id, 1); // الأول فـ Red
      room.setPlayerTeam(players[1].id, 2); // الثاني فـ Blue
      room.sendAnnouncement("⚔️ مود Futsal 1v1! (الرباح فـ 3 بيوتا | 3 دقايق)");
      room.startGame();
      return;
    }
  
    // 3. ثلاثة لاعبين (1v1 + 1 Spectator)
    if (count === 3) {
      currentMode = "2v2";
      room.stopGame();
      room.setCustomStadium(STADIUM_2V2);
      room.setScoreLimit(3);
      room.setTimeLimit(3);
      // الأقدمين كيلعبو 1v1 والثالث كيمشي Spectator:
      room.setPlayerTeam(players[0].id, 1);
      room.setPlayerTeam(players[1].id, 2);
      room.setPlayerTeam(players[2].id, 0); // آخر واحد دخل كيتسنى
      room.sendAnnouncement("⚔️ مود Futsal 1v1! اللاعب الثالث كيتسنى فـ Spectators.");
      room.startGame();
      return;
    }
  
    // 4. أربعة أو خمسة لاعبين (2v2)
    if (count === 4 || count === 5) {
      currentMode = "2v2";
      room.stopGame();
      room.setCustomStadium(STADIUM_2V2);
      room.setScoreLimit(3);
      room.setTimeLimit(3);
      // 2 فـ Red و 2 فـ Blue، واللاعب رقم 5 كيمشي لـ Spectator:
      room.setPlayerTeam(players[0].id, 1);
      room.setPlayerTeam(players[1].id, 2);
      room.setPlayerTeam(players[2].id, 1);
      room.setPlayerTeam(players[3].id, 2);
      if (count === 5) {
        room.setPlayerTeam(players[4].id, 0); // آخر واحد كيتسنى
        room.sendAnnouncement("⚠️ كاينين 5 لاعبين: الماب رجع لـ 2v2 وآخر واحد دخل كيتسنى فـ Spectator حتى تكمل 6 لعابة!");
      } else {
        room.sendAnnouncement("🔥 مود Futsal 2v2! (الرباح فـ 3 بيوتا | 3 دقايق)");
      }
      room.startGame();
      return;
    }
  
    // 5. ستة لاعبين فما فوق (3v3 تيران كبير)
    if (count >= 6) {
      currentMode = "3v3";
      room.stopGame();
      room.setCustomStadium(STADIUM_3V3);
      room.setScoreLimit(3);
      room.setTimeLimit(5); // ⏱️ 5 دقايق فـ 3v3
      // توزيع 3 في Red و 3 في Blue والباقي Spectators:
      for (let i = 0; i < count; i++) {
        if (i === 0 || i === 2 || i === 4) room.setPlayerTeam(players[i].id, 1);
        else if (i === 1 || i === 3 || i === 5) room.setPlayerTeam(players[i].id, 2);
        else room.setPlayerTeam(players[i].id, 0);
      }
      room.sendAnnouncement("🏟️ كملو 6 لاعبين! الماب طلع لـ Futsal 3v3 تيران كبير (الرباح فـ 3 بيوتا | 5 دقايق)!");
      room.startGame();
      return;
    }
  }
  
  // ==============================================================================
  // ⚽ 2. بداية الماتش وضبط الكرة
  // ==============================================================================
  room.onGameStart = function(byPlayer) {
    lastKicker = null;
    secondLastKicker = null;
    room.setDiscProperties(0, {
      radius: CONFIG.futsalBall.radius,
      color: CONFIG.futsalBall.color,
      invMass: CONFIG.futsalBall.invMass,
      damping: CONFIG.futsalBall.damping,
      bounciness: CONFIG.futsalBall.bounciness
    });
  };
  
  // 👟 3. تسجيل لمسات الكرة
  room.onPlayerBallKick = function(player) {
    if (lastKicker && lastKicker.id !== player.id) {
      secondLastKicker = lastKicker;
    }
    lastKicker = player;
    lastKickTime = Date.now();
  };
  
  // 🥅 4. تسجيل الأهداف والإعلانات
  room.onTeamGoal = function(team) {
    const scores = room.getScores();
    const timeSeconds = scores ? Math.floor(scores.time) : 0;
    const minutes = Math.floor(timeSeconds / 60).toString().padStart(2, "0");
    const seconds = (timeSeconds % 60).toString().padStart(2, "0");
    const timeFormatted = `${minutes}:${seconds}`;
  
    const redScore = scores ? scores.red : 0;
    const blueScore = scores ? scores.blue : 0;
    const scoreFormatted = `🔴 ${redScore} - ${blueScore} 🔵`;
  
    if (!lastKicker) {
      room.sendAnnouncement(`⚽ GOOOOOOL! [${scoreFormatted}] ⏱️ ${timeFormatted}`, null, 0xFFFF00, "bold", 1);
      return;
    }
  
    if (lastKicker.team === team) {
      let msg = `⚽ GOOOOOOL! ${lastKicker.name} 🎯✨`;
      if (secondLastKicker && secondLastKicker.team === team && secondLastKicker.id !== lastKicker.id && (Date.now() - lastKickTime < 7000)) {
        msg += `
  👟 أسيست رائع من: ${secondLastKicker.name} 🔥`;
      }
      msg += `
  ⏱️ التوقيت: [${timeFormatted}] | النتيجة: ${scoreFormatted}`;
      room.sendAnnouncement(msg, null, 0x00FF88, "bold", 1);
    } else {
      let msg = `🤦‍♂️ هدف ضد مرماه (OWN GOAL)! 💥
  🤡 ${lastKicker.name} غلط وماركا على فرقتو!
  ⏱️ التوقيت: [${timeFormatted}] | النتيجة: ${scoreFormatted}`;
      room.sendAnnouncement(msg, null, 0xFF4444, "bold", 2);
    }
  
    lastKicker = null;
    secondLastKicker = null;
  };
  
  // ==============================================================================
  // 🚪 5. دخول وخروج اللاعبين
  // ==============================================================================
  room.onPlayerJoin = function(player) {
    room.sendAnnouncement(`👋 مرحبا بيك ${player.name}! كتب !help للأوامر.`);
    joinOrder.push(player.id);
    specQueue.push(player.id);
    balanceAndCheckStadium();
  };
  
  room.onPlayerLeave = function(player) {
    joinOrder = joinOrder.filter(id => id !== player.id);
    specQueue = specQueue.filter(id => id !== player.id);
    if (pickingCaptain && pickingCaptain.id === player.id) {
      pickingCaptain = null;
    }
    // غير كيخرج شي لعاب كيعاود السيرفور يوازن الفرق والمابات أوتوماتيك
    balanceAndCheckStadium();
  };
  
  // ==============================================================================
  // 🏆 6. نهاية الماتش: الخاسر فـ 1v1 كيرجع يلعب يلا كانو غير 2
  // ==============================================================================
  room.onTeamVictory = function(scores) {
    const winnerTeam = scores.red > scores.blue ? 1 : 2;
    const loserTeam = winnerTeam === 1 ? 2 : 1;
  
    room.sendAnnouncement(`🎉 مبروك لفرقة الـ ${winnerTeam === 1 ? "🔴 RED" : "🔵 BLUE"} الرباح!`);
  
    const players = room.getPlayerList();
    const total = players.length;
  
    // 💡 حل مشكلة 1v1 فاش كيكونو غير 2 لعابة فـ الروم كولها:
    if (total <= 2) {
      // الخاسر كيرجع يلعب ديريكت ومكيبقاش معلق فـ Spectators
      players.forEach(p => {
        if (p.team === 0 || p.team === loserTeam) {
          room.setPlayerTeam(p.id, loserTeam);
        }
      });
      room.sendAnnouncement("🔄 إعادة الماتش بين نفس اللاعبين حيت كاينين غير 2 فالروم!");
      room.startGame();
      return;
    }
  
    // يلا كانو أكثر من 2 لعابة: الخاسر كيمشي Spectator
    players.forEach(p => {
      if (p.team === loserTeam) {
        room.setPlayerTeam(p.id, 0);
        specQueue = specQueue.filter(id => id !== p.id);
        specQueue.push(p.id);
      }
    });
  
    let targetTeamSize = 1;
    if (total >= 6) targetTeamSize = 3;
    else if (total >= 4) targetTeamSize = 2;
  
    const specs = room.getPlayerList().filter(p => p.team === 0);
    if (specs.length > 0) {
      const nextCaptainId = specQueue.find(id => specs.some(s => s.id === id)) || specs[0].id;
      const nextCaptain = room.getPlayer(nextCaptainId);
      room.setPlayerTeam(nextCaptain.id, loserTeam);
      specQueue = specQueue.filter(id => id !== nextCaptain.id);
  
      neededPicks = targetTeamSize - 1;
      if (neededPicks > 0) {
        pickingCaptain = nextCaptain;
        promptCaptainPick();
      } else {
        room.startGame();
      }
    } else {
      room.startGame();
    }
  };
  
  function promptCaptainPick() {
    const specs = room.getPlayerList().filter(p => p.team === 0);
    if (specs.length === 0 || neededPicks <= 0) {
      pickingCaptain = null;
      room.startGame();
      return;
    }
  
    room.sendAnnouncement(`👑 الكابيتان ${pickingCaptain.name}، عزل لعاب بـ !p [الرقم]:`);
    specs.forEach((p, index) => {
      room.sendAnnouncement(`[${index + 1}] ➔ ${p.name}`);
    });
  }
  
  // ==============================================================================
  // 💬 7. الأوامر (Commands)
  // ==============================================================================
  room.onPlayerChat = function(player, message) {
    const msg = message.trim();
    const args = msg.split(" ");
    const command = args[0].toLowerCase();
  
    // !bb
    if (command === "!bb") {
      room.sendAnnouncement(`👋 بسلامة ${player.name}! تهلا فراسك.`);
      room.kickPlayer(player.id, "Bslama!", false);
      return false;
    }
  
    // !admin
    if (command === "!admin") {
      if (args[1] === CONFIG.adminPassword) {
        room.setPlayerAdmin(player.id, true);
        room.sendAnnouncement(`👑 وليتي أدمين بنجاح!`, player.id, 0x00FF00, "bold");
      } else {
        room.sendAnnouncement(`❌ المودباس غلط!`, player.id, 0xFF0000);
      }
      return false;
    }
  
    // !p
    if (command === "!p") {
      if (!pickingCaptain || pickingCaptain.id !== player.id) {
        room.sendAnnouncement("❌ نتا ماشي الكابيتان لي كيعزل دابا!", player.id);
        return false;
      }
  
      const pickIndex = parseInt(args[1]) - 1;
      const specs = room.getPlayerList().filter(p => p.team === 0);
  
      if (isNaN(pickIndex) || pickIndex < 0 || pickIndex >= specs.length) {
        room.sendAnnouncement("❌ رقم غلط! عزل رقم من القائمة.", player.id);
        return false;
      }
  
      const chosenPlayer = specs[pickIndex];
      room.setPlayerTeam(chosenPlayer.id, player.team);
      specQueue = specQueue.filter(id => id !== chosenPlayer.id);
      room.sendAnnouncement(`✅ ${player.name} عزل ${chosenPlayer.name}!`);
  
      neededPicks--;
      if (neededPicks > 0) {
        promptCaptainPick();
      } else {
        pickingCaptain = null;
        room.startGame();
      }
      return false;
    }
  
    // !help
    if (command === "!help") {
      room.sendAnnouncement("📖 الأوامر المتاحة:");
      room.sendAnnouncement("!admin [pass] ➔ أخذ الأدمين");
      room.sendAnnouncement("!p [رقم] ➔ اختيار اللاعب (للكابيتان)");
      room.sendAnnouncement("!bb ➔ الخروج من الروم (بسلامة)");
      return false;
    }
  
    return true;
  };
  
  // تشغيل التدريب فـ البداية
  balanceAndCheckStadium();
  
});
