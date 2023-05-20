import { ListNode } from "./list_node";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = head;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      if (current === null) {
        head = list1;
        list1 = list1.next;
        head.next = null;
        current = head;
      } else {
        current.next = list1;
        list1 = list1.next;
        current = current.next;
        current.next = null;
      }
    } else {
      if (current === null) {
        head = list2;
        list2 = list2.next;
        head.next = null;
        current = head;
      } else {
        current.next = list2;
        list2 = list2.next;
        current = current.next;
        current.next = null;
      }
    }
  }

  while (list1 != null) {
    if (current === null) {
      head = list1;
      list1 = list1.next;
      head.next = null;
      current = head;
    } else {
      current.next = list1;
      list1 = list1.next;
      current = current.next;
      current.next = null;
    }
  }

  while (list2 != null) {
    if (current === null) {
      head = list2;
      list2 = list2.next;
      head.next = null;
      current = head;
    } else {
      current.next = list2;
      list2 = list2.next;
      current = current.next;
      current.next = null;
    }
  }

  return head;
};
