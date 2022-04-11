export const parsePrice = (list) => {
  if (!list) return [];
  if (list.length === 0) return [];
  return list.map(mr => {
    const i = parseInt(mr.cost_in_credits);
    if (Number.isNaN(i)) return 0;
    return i;
  })
}
