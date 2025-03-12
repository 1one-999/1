#include <stdio.h>
#include <string.h>
int main() {
    int a, b, len;
    char str[100];
    scanf("%d", &a);
    
    for (int i = 0; i < a; i++){
        scanf("%d %s", &b, &str);
        len = strlen(str);
        for (int j = 0; j < len; j++) {
            for (int k = 0; k < b; k++) {
                printf("%c", str[j]);
            }
        }
        printf("\n");
    }
    return 0;
}