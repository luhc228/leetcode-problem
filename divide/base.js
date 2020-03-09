function divideConquer(problem, param1, param2) {
  // recursion terminator
  if (problem === None) {
    print_result
    return
  }

  // prepare data
  data = prepare_data(problem)
  subproblems = splitProblem(problem, data)

  // conquer subproblems
  subresult1 = divideConquer(subproblems[0], p1)
  subresult2 = divideConquer(subproblems[1], p1)

  subresult3 = divideConquer(subproblems[2], p1)

  // process and generate the final result
  result = process_result(subresult1, subresult2, subresult3)

  // revert the current level states
}