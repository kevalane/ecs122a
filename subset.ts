let S: Set<number> = new Set<number>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let setOfSubsets: Set<Set<number>> = new Set<Set<number>>();
let numberOfSubsets: number = Math.pow(2, S.size);

for (let i = 0; i < numberOfSubsets; i++) {
    // let subset: Set<number> = new Set<number>();
    // let j: number = 0;
    // for (let element of S) {
    //     if ((i & (1 << j)) > 0) {
    //         subset.add(element);
    //     }
    //     j++;
    // }
    // setOfSubsets.add(subset);
}