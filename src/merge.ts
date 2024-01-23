export function merge(collection_1: number[], collection_2: number[]): number[] {
    let merged: number[] = [];
    let index1 = 0, index2 = 0;
  
    while (index1 < collection_1.length && index2 < collection_2.length) {
      if (collection_1[index1] < collection_2[index2]) {
        merged.push(collection_1[index1++]);
      } else {
        merged.push(collection_2[index2++]);
      }
    }
  
    while (index1 < collection_1.length) {
      merged.push(collection_1[index1++]);
    }
  
    while (index2 < collection_2.length) {
      merged.push(collection_2[index2++]);
    }
  
    return merged;
  }
  