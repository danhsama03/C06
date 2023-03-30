import { question } from "readline-sync";
/**
 * Ham nhap cac phan tu theo so luong
 * @param len So luong phan tu 
 * @returns Tra ve mang
 */
function nhapMang(len: number): number[] {
	let arr: number[] = [];
	for (let i = 0; i < len; i++) {
        arr[i] = Number(question(`Nhap phan tu vi tri ${i}: `));
    };
	return arr;
};

/**
 * Ham kiem tra la so nguyen to
 * @param x Phan tu trong mang
 * @returns Tra ve true hoac false
 */
function laSNT(x: number): boolean {
    let dem: number = 0;
    for (let i = 1; i <= x; i++) {
        if (x % i == 0) {
            dem++;
        };
    };

    if (dem == 2) {
        return true;
    } else {
        return false;
    };   
};

/**
 * Ham tim kiem tra so nguyen to
 * @param arr Mang
 */
function kiemTraSNT(arr: number[]): void {
    let diem: number = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (laSNT(arr[i]) == true) {
            diem++;
        };
    };
    if (diem == arr.length) {
        console.log("Yes");
    } else {
        console.log("No");
    };
};

/**
 * Ham chuc nang nhap so luong phan tu, goi ham nhap mang, ham kiem tra so nguyen to
 */
function main(): void {
    let n: number = Number(question("Nhap so luong phan tu: "));
    let a: number[] = nhapMang(n);
    kiemTraSNT(a);
};

main();

export {};