/**
 * スコア用のテキストを生成する
 */
export function makeScoreText(score: number, prefix: string) {
  return `${(prefix ?? '')} ${('0000000' + score).substr(-8)}`;
}
