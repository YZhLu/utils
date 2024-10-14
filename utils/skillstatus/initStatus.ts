// @ts-nocheck
export default function initStatus(skillstatus, initValue = 0) {
	const status = skillstatus.status.map((s) => {
		const _status = { ...s, value: initValue };
		//console.log(_status)
		//status['value'] = 10;
		return _status;
	});
	return status;
}
