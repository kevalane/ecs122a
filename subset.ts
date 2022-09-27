let S: Set<number> = new Set<number>([1, 2, 3]);

function getSetOfSubsets(S: Set<number>): Set<Set<number>> {
    let setOfSubsets: Set<Set<number>> = new Set<Set<number>>();
    let numberOfSubsets: number = Math.pow(2, S.size);

    for (let i = 0; i < numberOfSubsets; i++) {
        let subset: Set<number> = new Set<number>();
        let index: number = i;
        for (let k: number = 0; k < S.size; k++) {
            if (index & 0b1) subset.add(k+1);
            index = index >> 1;
        }
        setOfSubsets.add(subset);
    }
    return setOfSubsets;
}

function getTupleSubsets(S: Set<number>): Set<Set<number>> {
    let tupleSet: Set<Set<number>> = new Set<Set<number>>();
    if (S.size <= 1) return tupleSet;
    for (let i: number = 0; i < S.size; i++) {
        for (let j: number = i; j < S.size; j++) {
            let subset: Set<number> = new Set<number>();
            if (i != j) {
                subset.add(i+1);
                subset.add(j+1);
                tupleSet.add(subset);
            }
        }
    }
    return tupleSet;
}

console.log(getTupleSubsets(S));