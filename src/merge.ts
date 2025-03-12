export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    let merged: number[] = [];
    let i = 0, j = 0;
    
    while (i < collection_1.length && j < collection_2.length) {
      if (collection_1[i] < collection_2[j]) {
        merged.push(collection_1[i++]);
      } else {
        merged.push(collection_2[j++]);
      }
    }
    
    while (i < collection_1.length) {
      merged.push(collection_1[i++]);
    }
    
    while (j < collection_2.length) {
      merged.push(collection_2[j++]);
    }
    
    let result: number[] = [];
    let k = 0, m = 0;
    
    while (k < merged.length && m < collection_3.length) {
      if (merged[k] < collection_3[m]) {
        result.push(merged[k++]);
      } else {
        result.push(collection_3[m++]);
      }
    }
    
    while (k < merged.length) {
      result.push(merged[k++]);
    }
    
    while (m < collection_3.length) {
      result.push(collection_3[m++]);
    }
    
    return result;
  }